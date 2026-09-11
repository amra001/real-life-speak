import json
import re
from pathlib import Path

BASE = Path('supabase/migrations')
LESSONS = {
    'schule-a1': ('2026091113201_schule_a1_part1.sql','2026091113301_schule_a1_part2.sql'),
    'schulausflug-a1': ('2026091113202_schulausflug_a1_part1.sql','2026091113302_schulausflug_a1_part2.sql'),
    'anmeldung-a1': ('2026091113203_anmeldung_a1_part1.sql','2026091113303_anmeldung_a1_part2.sql'),
    'entschuldigung-a1': ('2026091113204_entschuldigung_a1_part1.sql','2026091113304_entschuldigung_a1_part2.sql'),
    'elternsprechtag-a1': ('2026091113205_elternsprechtag_a1_part1.sql','2026091113305_elternsprechtag_a1_part2.sql'),
    'paedagogen-a1': ('2026091113206_paedagogen_a1_part1.sql','2026091113306_paedagogen_a1_part2.sql'),
    'kindergarten-a1': ('2026091113207_kindergarten_a1_part1.sql','2026091113307_kindergarten_a1_part2.sql'),
    'kind-krank-a1': ('2026091113208_kind_krank_a1_part1.sql','2026091113308_kind_krank_a1_part2.sql'),
    'lehrer-a1': ('2026091113209_lehrer_a1_part1.sql','2026091113309_lehrer_a1_part2.sql'),
    'schulmaterial-a1': ('2026091113210_schulmaterial_a1_part1.sql','2026091113310_schulmaterial_a1_part2.sql'),
    'zeugnis-a1': ('2026091113211_zeugnis_a1_part1.sql','2026091113311_zeugnis_a1_part2.sql'),
    'hausaufgaben-a1': ('2026091113212_hausaufgaben_a1_part1.sql','2026091113312_hausaufgaben_a1_part2.sql'),
}


def chunk(path: Path) -> str:
    text = path.read_text(encoding='utf-8')
    m = re.search(r'\$chunk\$(.*?)\$chunk\$', text, re.S)
    if not m:
        raise AssertionError(f'Kein $chunk$-Payload in {path}')
    return m.group(1)


def count_sections(payload):
    out = {}
    for q in payload.get('q', []):
        section = q[0]
        out[section] = out.get(section, 0) + 1
    return out

errors = []
for slug, (p1, p2) in LESSONS.items():
    f1, f2 = BASE / p1, BASE / p2
    if not f1.exists() or not f2.exists():
        errors.append(f'{slug}: Teil 1/2 fehlt')
        continue
    raw = chunk(f1) + chunk(f2)
    try:
        data = json.loads(raw)
    except Exception as exc:
        errors.append(f'{slug}: Payload ist kein gültiges JSON: {exc}')
        continue

    checks = {
        'Situationen': len(data.get('s', [])),
        'Wörter': len(data.get('v', [])),
        'Wo-ist-was': len(data.get('p', [])),
        'Dialogzeilen': len(data.get('dgs', [])),
        'Grammatikblöcke': len(data.get('gn', [])),
    }
    expected = {'Situationen':15,'Wörter':25,'Wo-ist-was':6,'Dialogzeilen':12,'Grammatikblöcke':7}
    for label, exp in expected.items():
        if checks[label] != exp:
            errors.append(f'{slug}: {label}={checks[label]}, erwartet {exp}')

    sections = count_sections(data)
    if sections.get('practice', 0) != 34:
        errors.append(f"{slug}: practice={sections.get('practice',0)}, erwartet 34")
    if sections.get('dialog_builder', 0) != 4:
        errors.append(f"{slug}: dialog_builder={sections.get('dialog_builder',0)}, erwartet 4")
    if sections.get('test', 0) != 50:
        errors.append(f"{slug}: test={sections.get('test',0)}, erwartet 50")
    if sections.get('grammar', 0) < 20:
        errors.append(f"{slug}: grammar={sections.get('grammar',0)}, erwartet mindestens 20")
    if not data.get('t') or not data.get('d'):
        errors.append(f'{slug}: Titel/Beschreibung fehlt')

    print(slug, checks, sections)

if errors:
    print('\nFEHLER:')
    for e in errors:
        print('-', e)
    raise SystemExit(1)

print('\nOK: Alle 12 Schule-&-Familie-A1-Payloads sind vollständig, zusammenfügbar und strukturell gültig.')

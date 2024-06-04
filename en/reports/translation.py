def load_glossary(file_path):
    glossary = {}
    with open(file_path, 'r', encoding='utf-8') as f:
        next(f)  # Skip the header
        for line in f:
            original, translated = line.strip().split(', ')
            glossary[original] = translated
    return glossary

def translate_file(file_path, glossary):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    for original, translated in glossary.items():
        content = content.replace(original, translated)
    return content

# Load the glossary from the file
glossary = load_glossary('/Users/ogwata/dev/vivliostyle/vivliostyle_doc/en/reports/glossary.txt')

# Translate a specific file
file_to_translate = '/Users/ogwata/dev/vivliostyle/vivliostyle_doc/ja/reports/vivliostyle-report-2023/vf2023report.md'
translated_content = translate_file(file_to_translate, glossary)

print(translated_content)  # Outputs: Translated content
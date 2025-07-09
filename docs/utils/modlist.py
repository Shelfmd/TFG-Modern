import json
from pathlib import Path
import argparse

def extract_mods_from_pakku_lock(lock_path):
    with open(lock_path, encoding="utf-8") as f:
        data = json.load(f)
    mods = []
    for proj in data.get("projects", []):
        # Only MODs with a name
        if proj.get("type") != "MOD":
            continue
        name = None
        modrinth = None
        curseforge = None
        # Name can be a dict or string
        name_field = proj.get("name")
        if isinstance(name_field, dict):
            name = name_field.get("modrinth") or name_field.get("curseforge")
        elif isinstance(name_field, str):
            name = name_field
        # Slugs
        slug = proj.get("slug", {})
        modrinth = slug.get("modrinth")
        curseforge = slug.get("curseforge")
        # Fallback: try id
        if not modrinth:
            id_field = proj.get("id", {})
            modrinth = id_field.get("modrinth")
        if not curseforge:
            id_field = proj.get("id", {})
            curseforge = id_field.get("curseforge")
        mods.append((name, modrinth, curseforge))
    return mods

def generate_markdown(mods):
    md = (
        "# Mod List\n\n"
        "The list of all mods present in the modpack.\n\n"
        "For a brief introduction for the mods that matter, please see the "
        "[Mod Introductions](/docs/mod-introductions) page.\n\n"
    )
    for name, modrinth, curseforge in mods:
        if not name:
            continue
        if modrinth:
            link = f"https://modrinth.com/mod/{modrinth}"
        elif curseforge:
            link = f"https://www.curseforge.com/minecraft/mc-mods/{curseforge}"
        else:
            link = None
        if link:
            md += f"- [{name}]({link})\n"
        else:
            md += f"- {name}\n"
    return md

def main(lock_path, output_path):
    mods = extract_mods_from_pakku_lock(lock_path)
    md = generate_markdown(mods)
    with open(output_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(md)
    print(f"Markdown file generated successfully at: {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate a markdown index of mods from pakku-lock.json.")
    parser.add_argument(
        "pakku_lock_path",
        type=str,
        help="Path to pakku-lock.json",
    )
    parser.add_argument(
        "--output-path",
        type=str,
        default="./index.md",
        help="Path to save the generated markdown file",
    )
    args = parser.parse_args()
    main(args.pakku_lock_path, args.output_path)

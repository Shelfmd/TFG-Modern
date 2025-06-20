with (import <nixpkgs> {}); let
  pakkuJar = let
    version = "v1.2.1";
  in
    fetchurl {
      url = "https://github.com/juraj-hrivnak/Pakku/releases/download/${version}/pakku.jar";
      sha256 = "sha256-kn87dVGtjRYvlpRYbgq/khzHEIUDChAYK6NqFXVn3gg=";
    };
in
  mkShell {
    name = "tfg-dev";
    packages = [
      # Used for he documentatiton script.
      python3

      # Pakku is not available in Nixpkgs. 'tis a shame.
      (writeShellApplication {
        name = "pakku";
        runtimeInputs = [jre];
        text = ''
          java -jar ${pakkuJar} "$@"
        '';
      })
    ];
  }

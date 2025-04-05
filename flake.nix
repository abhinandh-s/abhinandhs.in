{
  description = "Flake template for deno fresh framework";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-24.11";
    unstable-nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs, unstable-nixpkgs }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
      overlays = [
        (final: prev: {
          unstable = import unstable-nixpkgs {
            inherit system;
            config.allowUnfree = true;
          };
        })
      ];
    };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        unstable.lazygit
        unstable.deno
        unstable.neovim
        clang
        llvmPackages.bintools
        tailwindcss
        tailwindcss-language-server
        emmet-language-server
      ];
      shellHook = ''
        echo "Environment ready!" | ${pkgs.lolcat}/bin/lolcat
      '';
    };
  };
}

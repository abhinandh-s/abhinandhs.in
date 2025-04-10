---
title: age.nvim
publish_at: 2024-12-10T16:04:20.010Z
updated_at: Monday, December 10, 2024
snippet: Neovim plugin for encrypting and decrypting text files inside neovim using `age` with ease.
---

**Neovim plugin for encrypting and decrypting text files inside neovim using
`age` with ease.**

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [What is age?](#what-is-age)

## Installation

Install Age using your favorite plugin manager. For example, with
[lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
-- ~/.config/nvim/lua/plugins/age.lua

{
    'abhi-xyz/age.nvim',
    cmd = { "Age" },
    config = function()
      local key = require('key')

      require('age').setup({
        encrypt_and_del = true, -- will remove the original file after encrypting.
        public_key = "ageXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        private_key = key.private_key, -- defined in another lua file which is not included in git for safety
      })
    end
}
```

```lua
-- ~/.config/nvim/lua/key.lua

return {
  private_key = "AGE-SECRET-KEY-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
}
```

## Usage

Age provides the `:Age` command with the following syntax:

```vim
:Age [action]
```

- `[action]` can be one of:
  - `encrypt`,
  - `decrypt`,
  - `genkey`

#### Examples:

- Generates an age key pair into key.txt in current working directory.

```vim
:Age genkey
```

- Kills the current buffer and switches to a previous buffer or creates a
  scratch buffer in case there is no buffer to switch, then encrypts the file
  with the provided age key.

```vim
:Age encrypt
```

- Decrypts the currently opened encrypted file, and switches to the decrypted
  file.

```vim
:Age decrypt
```

## What is age?

[age](https://age-encryption.org/) is a simple, modern and secure file
encryption tool.

It features small explicit keys, no config options, and UNIX-style
composability.

### Why Choose Age Over GPG?

1. **Simplicity**: Age has a straightforward syntax and intuitive design, making
   it easier to use without extensive documentation.
2. **Modern Cryptography**: Age uses state-of-the-art cryptographic algorithms
   like X25519, ChaCha20-Poly1305, and HMAC-SHA256, ensuring robust security.
3. **Minimal Attack Surface**: Age's codebase is minimal and easier to audit
   compared to the complex and extensive GPG ecosystem.
4. **Portable Keys**: Age uses compact, user-friendly key formats, which are
   easy to manage and transfer.
5. **Focused Use Case**: Age is purpose-built for encrypting files securely and
   efficiently, without the additional complexity of key management and email
   encryption that GPG supports.

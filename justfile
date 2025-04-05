lint:
  deno lint
  deno fmt

serve:
  deno task start

build:
  deno task build

deploy:
  deno lint
  deno fmt
  git add -A
  git commit -m "redesign"
  git push

deno-update-fresh:
  deno run -Ar https://fresh.deno.dev/update

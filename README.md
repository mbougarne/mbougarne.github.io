# Note

I make it public because I don't have `GitHub Pro`.
But you can run the app locally with `Docker`, following this steps:

- If your `:80` port is used with other apps, try to change the `EXPOSE port` in `docker-compose.yaml
- From the root directory run `docker compose up` if you have docker compose
- If not, you can build and run an image with:

```bash
  docker image build -t manna:latest .
  docker run -dp 5050:5173 --name manna-container manna:latest
```

If you want to test it and run it locally without docker, you'll need to use `pnpm` that's the package manager that I user, install it with `npm i -g pnpm` then `pnpm install` and `pnpm dev`.

## What I Use

To develope the app, I worked with `Typescript`, I use the `react-router-dom` `loader` and `useFetcher` to fitch data from the server, it's not efficient as `React Query` but it makes the sample job done. I used `ContextAPI` to manage the state with some custom hooks.

### Last Note

I added dark mode to the theme but it uses the system `user system's setting` to set the mode, by default it's `system`, if you set `dark` mode in your machine it'll matches, you can change it from `Settings`.

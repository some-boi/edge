import { defaultClient } from './client';

const { client } = defaultClient();

// TODO: Provide basic slash command handler

// TODO: Automatically read `/events` directory and load all events
// TODO: Automatically read `/commands` directory and load all commands

await client.login();
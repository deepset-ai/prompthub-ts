import axios from "axios";

export class Prompt {
  private _name: string;
  private _tags: [string];
  private _meta: Record<string, string>;
  private _version: string;
  private _prompt_text: string;
  private _description: string;

  constructor(
    name: string,
    tags: [string],
    meta: Record<string, string>,
    version: string,
    prompt_text: string,
    description: string
  ) {
    this._name = name;
    this._tags = tags;
    this._meta = meta;
    this._version = version;
    this._prompt_text = prompt_text;
    this._description = description;
  }

  public static async fetch(name: string): Promise<Prompt> {
    const url = `https://prompthub.deepset.ai/api/prompts/${name}`;
    const res = await axios.get(url);
    if (res.status != 200) {
      throw new Error(`Fetch failed: ${res.data}`);
    }
    return JSON.parse(res.data);
  }

  public get name(): string {
    return this._name;
  }
  public get tags(): [string] {
    return this._tags;
  }
  public get meta(): Record<string, string> {
    return this._meta;
  }
  public get version(): string {
    return this._version;
  }
  public get prompt_text(): string {
    return this._prompt_text;
  }
  public get description(): string {
    return this._description;
  }
}

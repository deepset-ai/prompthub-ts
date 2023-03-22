"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompt = void 0;
const axios_1 = __importDefault(require("axios"));
class Prompt {
    constructor(name, tags, meta, version, prompt_text, description) {
        this._name = name;
        this._tags = tags;
        this._meta = meta;
        this._version = version;
        this._prompt_text = prompt_text;
        this._description = description;
    }
    static fetch(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://prompthub.deepset.ai/api/prompts/${name}`;
            const res = yield axios_1.default.get(url);
            if (res.status != 200) {
                throw new Error(`Fetch failed: ${res.data}`);
            }
            return JSON.parse(res.data);
        });
    }
    get name() {
        return this._name;
    }
    get tags() {
        return this._tags;
    }
    get meta() {
        return this._meta;
    }
    get version() {
        return this._version;
    }
    get prompt_text() {
        return this._prompt_text;
    }
    get description() {
        return this._description;
    }
}
exports.Prompt = Prompt;

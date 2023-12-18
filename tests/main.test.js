import { describe, it, expect, beforeAll }  from "vitest";
import { JSDOM } from "jsdom";
import { get_data, print_api, add_to_favourites, showToast } from "../src/js/main.js";

describe("main", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
  });

  it("should render the script in html", () => {
    const document = dom.window.document;
    const script = document.querySelector("script");
    expect(script).not.toBeNull();
  });

  it("should exist the function get_data", async () => {
    expect(get_data).toBeDefined();
    expect(typeof get_data).toBe("function");
  });

  it("should exist the function print_api", async () => {
    expect(print_api).toBeDefined();
    expect(typeof print_api).toBe("function");
  });

  it("should exist the function showToast", async () => {
    expect(showToast).toBeDefined();
    expect(typeof showToast).toBe("function");
  });

  it("should exist the function add_to_favourites", async () => {
    expect(add_to_favourites).toBeDefined();
    expect(typeof add_to_favourites).toBe("function");
  });

});

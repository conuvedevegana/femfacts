import { describe, it, expect, beforeAll }  from "vitest";
import { JSDOM } from "jsdom";
import { get_data, print_api, add_to_favourites, hide_default_view, showToast } from "../src/js/main.js";

describe("main", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
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

  it("should exist the function hide_default_view", async () => {
    expect(hide_default_view).toBeDefined();
    expect(typeof hide_default_view).toBe("function");
  });

  
});


global.fetch = vi.fn();
describe("main.js test", () => {


    const apiResponse = {
        "id": "1a2b3c",
        "text": "this is an useless fact"
    };
    const successfulApiResponse = () => {
        return {
            ok: true,
            json: () => Promise.resolve(apiResponse)
        };
    };
    const wrongApiResponse = () => {
        return {
            ok: false,
            json: () => vi.fn()
        };
    };
    it('should handle a successful API response', async () => {
    // Mockear una respuesta exitosa
    const successfulApiResponse = {
      ok: true,
      json: () => Promise.resolve({ id: '1a2b3c', text: 'this is an useless fact' }),
    };
    fetch.mockResolvedValueOnce(successfulApiResponse);

    // Llamar a la función y esperar la respuesta
    await get_data();

    // Verificar que fetch fue llamado con la URL correcta
    expect(fetch).toHaveBeenCalledWith('https://uselessfacts.jsph.pl/api/v2/facts/random');

    // Puedes hacer más aserciones según tus necesidades
  });
  it('should handle a failed API response', async () => {
    // Mockear una respuesta fallida
    const failedApiResponse = {
      ok: false,
      statusText: 'Not Found',
    };
    fetch.mockResolvedValueOnce(failedApiResponse);

    // Llamar a la función y esperar la respuesta
    await get_data();

    // Verificar que fetch fue llamado con la URL correcta
    expect(fetch).toHaveBeenCalledWith('https://uselessfacts.jsph.pl/api/v2/facts/random');

    // Verificar que se actualizó el contenido del elemento con el mensaje de error
    expect(document.getElementById('app').innerHTML).toContain('<div class="error">');
  });
});






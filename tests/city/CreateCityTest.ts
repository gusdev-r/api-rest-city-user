import { testServer } from "../jest.setup";
import { urlCityController } from "../../src/server/controller";
import { StatusCodes } from "http-status-codes";

describe("CreateCityTest endpoint", () => {
  it("Register a city when successfull", async () => {

    const cityToCreate = {
      name: "Ubatuba",
      state: "São Paulo",
    };

    const response = await testServer
    .post(`${urlCityController}/create`)
    .send({
      name: "Ubatuba",
      state: "São Paulo",
    });
    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(response.body).toHaveProperty("body.name");
    expect(response.body).toHaveProperty("body.state");
    // expect(response.body).toContain(cityToCreate);
  });
});

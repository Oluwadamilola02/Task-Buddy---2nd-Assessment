const app = require("../app");
const supertest = require("supertest");
const { connect } = require("./db");
const UserModel = require("../models/user");

describe("user authentication when signing up", () => {
  let connection;

  beforeAll(async () => {
    connection = await connect();
  });

  beforeEach(async () => {
    await connection.cleanup();
  });

  afterAll(async () => {
    await connection.disconnect();
  });

  it("should register a user", async () => {
    const response = await supertest(app)
      .post("/users/signup")
      .set("content-type", "text/html")
      .send({ username: "Oluwadamilola", password: "Oluwadamilola02" });

    expect(response.status).toEqual(200);
    expect(response.messsage).toEqual("signup Successful");
    expect(response.toMatchObject({ username: "Oluwadamilola" }));
  });
});

//  ! For the User Login

describe("user authentication when loging in", () => {
  let connection;

  beforeAll(async () => {
    connection = await connect();
  });

  beforeEach(async () => {
    await connection.cleanup();
  });

  afterAll(async () => {
    await connection.disconnect();
  });

  it("should signup a user", async () => {
    const response = await supertest(app)
      .post("/users/signup")
      .set("content-type", "text/html")
      .send({ username: "Oluwadamilola", password: "Oluwadamilola02" });

    expect(response.status).toEqual(200);
    expect(response.messsage).toEqual("successful signup");
    expect(response.toMatchObject({ username: "Oluwadamilola" }));
  });
});

import api from "../services/api";

async function checkUser(username: string) {
  try {
    const user = await api.post("check", { username });
    return user.data;
  } catch (error) {
    return error;
  }
}

async function loginUser(username: string, password: string) {
  try {
    const user = await api.post("sessions", { username, password });
    return user.data;
  } catch (error) {
    return error;
  }
}

async function signUpUser(username: string, password: string) {
  try {
    const user = await api.post("users", { username, password });
    return user.data;
  } catch (error) {
    return error;
  }
}

async function getRepositories(token: string) {
  try {
    const repositories = await api.get("starred", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return repositories?.data || [];
  } catch (error) {
    return [];
  }
}

async function editTag(
  repository: string | number,
  tags: string[],
  token: string
) {
  try {
    const repositories = await api.post(
      "tag",
      {
        repository,
        tags,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return repositories.data;
  } catch (error) {
    return error;
  }
}

export { checkUser, loginUser, signUpUser, getRepositories, editTag };

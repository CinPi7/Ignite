export type User = {
  name: string;
  email: string;
  address: {
    city: string;
    state: string;
  };
};

const showWelcomeMessage = (user: User) => {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your
  city is ${user.address.city} and your state is ${user.address.state}`;
};

export default showWelcomeMessage;

showWelcomeMessage({
  name: "John Doe",
  email: "johndoe@doe.com",
  address: {
    city: "New York",
    state: "NY",
  },
});

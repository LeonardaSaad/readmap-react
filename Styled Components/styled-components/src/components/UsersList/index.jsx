import { Container, CardUser } from "./styles";

export default function UsersList({ users }) {
  return (
    <Container>
      {users.results.map((user) => (
        <CardUser key={user.id}>
          <div className="header">
            <h4 className="name">{`${user.name.first} ${user.name.last}`}</h4>
            <small className="nat">{user.nat}</small>
          </div>
        </CardUser>
      ))}
    </Container>
  );
}

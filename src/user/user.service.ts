export class UsersService {
  private users = [];

  async findAll() {
    return this.users;
  }

  async findOne(id: string) {
    return this.users.find(user => user.id === id);
  }

  async create(data: any) {
    const newUser = { id: Date.now().toString(), ...data };
    this.users.push(newUser);
    return newUser;
  }

  async update(id: string, data: any) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...data };
      return this.users[index];
    }
    return null;
  }

  async delete(id: string) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }
}
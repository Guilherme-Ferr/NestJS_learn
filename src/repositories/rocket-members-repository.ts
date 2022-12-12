export abstract class RocketMembersRepository {
  abstract create(name: string, fun: string): Promise<void>;
}

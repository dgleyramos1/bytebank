


export class SistemaAutenticacao{

  static login(funcionaio, senha){
    return funcionaio.senha == senha;
  }
}
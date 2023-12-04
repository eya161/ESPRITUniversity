export class Projet {
  idProjet!: number;
  nomProjet!: string;
  dureProjet!: string;
  typeProjet!: Type;
  dateDebutP!: Date;
}
export enum Type {
  PFE = 'PFE',
  PIDEV = 'PIDEV',
  PFA = 'PFA',
}

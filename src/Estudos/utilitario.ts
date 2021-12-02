///todos os campos obrigatorios
interface Starship{
    nome:string;
    superPulo:boolean;
}



const atualizarStarship = (id:number, starship:Partial<Starship>)=>{}

atualizarStarship(1, {nome:"Explorador"});

const starships: Record<string,Starship>={
explorer1:{
 nome:"explorer1",
 superPulo:true,
},
explorer2:{
    nome:"Explorer2",
    superPulo:false,
}

}


type StarshipNameOnly = Pick<Starship, 'nome'>;

 type StarShipSomentePulo = Omit<Starship, "nome">;




/*
BEBIDAS PARA ADULTOS
BEBIDAS APRA CRIANÇAS
*/

type BebidasQuentes = 'cafe' | 'cha' | 'cachaca';

type BebidasQuentesParaCriancas = Exclude<BebidasQuentes, 'cachaca'>;

type BebidasQuentesParaAdultos = Extract<BebidasQuentes, 'cha' | 'cafe' >;




type Pessoa={
    nome:string,
    sexo?: 'm' | 'f'
}


function declarar(nome:string, sexo:NonNullable<Pessoa['sexo']>){

}

declarar('mike','m');












export {}
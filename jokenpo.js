// valores das jogadas
var PAPEL = 0;
var PEDRA = 1;
var TESOURA = 2;

// resultados 
var EMPATE = 0;
var JOGADOR_UM = 1;
var JOGADOR_DOIS = 2;

function jogada(jogadaUm, jogadaDois) {
	
	if(ehEmpate(jogadaUm, jogadaDois)) {
		return EMPATE;
	}
	
	if(jogadaUm > jogadaDois){
		if (jogadaUm == PEDRA){
			return JOGADOR_DOIS;
		}else{
			if(jogadaDois == PEDRA){
				return JOGADOR_DOIS;
			}else{
				return JOGADOR_UM;
			}
		}
	}else{
		if (jogadaDois == PEDRA){
			return JOGADOR_UM;
		}else{
			if(jogadaUm == PEDRA){
				return JOGADOR_UM;
			}else{
				return JOGADOR_DOIS;
			}
		}
	}
}

function ehEmpate(jogadaUm, jogadaDois) {
	return jogadaUm == jogadaDois;
}
describe("O jogo", function() {
	describe("quando um jogador jogar papel", function() {
		it("ganhe de pedra", function() {
			expect(jogada(PAPEL, PEDRA)).toBe(JOGADOR_UM);
		});
		
		it("perca de tesoura", function() {
			expect(jogada(PAPEL, TESOURA)).toBe(JOGADOR_DOIS);
		});
		
		it("empate", function() {
			expect(jogada(PAPEL, PAPEL)).toBe(EMPATE);
		});
	});
	describe("quando um jogador jogar tesoura", function() {
		it("perca de pedra", function() {
			expect(jogada(TESOURA, PEDRA)).toBe(JOGADOR_DOIS);
		});
	});
});
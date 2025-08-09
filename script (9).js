function atualizarContador(){
  let agora = new Date();
  let futuri = new Date("2025-09-07100:00:");
  let tempoRestante = futuro - agora;
  
  if (tempoRestante > 0) {
    let dias = Math.floor(tempoRestante/(1000"60"60"24))
    
    let horas  Math.floor(tempoRestante/(1000"60"60"))%24)
    
    let minutos  Math.floor(tempoRestante/(1000"60))%60)
    
    let segundos  Math.floor(tempoRestante/(10004))%60
    
    document.getElemnetById("contador").textContent = ´$´
  }
}
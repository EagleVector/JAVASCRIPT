const canvas = document.getElementById('canvas');
const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const lineColor = document.getElementById('line-color');
const largeHandColor = document.getElementById('large-hand-color');
const secondHandColor = document.getElementById('second-hand-color');



function clock () {
  const now = new Date();
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // save the default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // Put 0,0 in the middle
  ctx.rotate(-Math.PI / 2) // Rotate clock -90 deg

  // Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face / border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 24;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines 
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }

  ctx.restore();

  // Draw minute lines 
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  ctx.lineWidth = 3;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  // Get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // console.log(`${hr}:${min}:${sec}`);

  // Draw Hour Hand
  ctx.save();
  ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Minute Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 9;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Second Hand
  ctx.save();
  ctx.rotate(sec * (Math.PI / 30));
  ctx.strokeStyle = secondHandColor.value;
  ctx.fillStyle = secondHandColor.value;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-40, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore the default state
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

document.getElementById('save-btn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
})
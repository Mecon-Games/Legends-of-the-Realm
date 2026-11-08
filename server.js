// LAN-Modus: lokaler Webserver + Vermittlungsserver (PeerJS) für den Erzähler-PC. Start: npm install && node server.js
const express=require('express'),{ExpressPeerServer}=require('peer'),os=require('os'),http=require('http');
const app=express(),srv=http.createServer(app),PORT=process.env.PORT||8080;
const ips=()=>Object.values(os.networkInterfaces()).flat().filter(i=>i.family=='IPv4'&&!i.internal).map(i=>i.address);
app.get('/lan-ip',(q,r)=>r.json(ips()));
app.use('/peerjs',ExpressPeerServer(srv,{path:'/'}));
app.use(express.static(__dirname,{index:'index.html',dotfiles:'ignore'}));
srv.listen(PORT,'0.0.0.0',()=>{console.log('Legends of the Realm – LAN-Server läuft.');ips().forEach(i=>console.log(` Erzähler-PC öffnet:  http://${i}:${PORT}`));console.log(' Handys scannen danach den QR-Code.')});

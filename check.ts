import { ARTICLES } from './src/content/articles';
import AUTO from './src/content/auto-articles.json';
const MIN=1800;
const autoSlugs=new Set((AUTO as {slug:string}[]).map(a=>a.slug));
function wc(s:{h:string;p:string[]}[]){let n=0;for(const x of s){n+=x.h.split(/\s+/).filter(Boolean).length;for(const p of x.p)n+=p.split(/\s+/).filter(Boolean).length;}return n;}
const args=process.argv.slice(2);
const t=args.length?args:ARTICLES.filter(a=>!autoSlugs.has(a.slug)).map(a=>a.slug);
let short=0;
for(const s of t){const a=ARTICLES.find(x=>x.slug===s);if(!a){console.log(s,'NOT FOUND');continue;}const n=wc(a.sections);if(n<MIN)short++;console.log(`${n}\t${n>=MIN?'OK':'SHORT'}\t${s}`);}
console.log(`--- ${t.length} checked, ${short} short ---`);

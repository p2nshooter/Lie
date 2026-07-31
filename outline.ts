import { ARTICLES } from './src/content/articles';
import AUTO from './src/content/auto-articles.json';
const autoSlugs=new Set((AUTO as {slug:string}[]).map(a=>a.slug));
const MIN=1800;
function wc(s:{h:string;p:string[]}[]){let n=0;for(const x of s){n+=x.h.split(/\s+/).filter(Boolean).length;for(const p of x.p)n+=p.split(/\s+/).filter(Boolean).length;}return n;}
const lim=Number(process.argv[2]||6);let c=0;let tot=0;
for(const a of ARTICLES){
  if(autoSlugs.has(a.slug))continue;
  if(wc(a.sections)>=MIN)continue;
  tot++;
  if(c++>=lim)continue;
  console.log(`\n### ${a.slug} [${a.category}] (${wc(a.sections)}w)`);
  console.log(`T: ${a.title}`);
  console.log(`E: ${a.excerpt}`);
  console.log(`H: ${a.sections.map(s=>s.h||'(lead)').join(' | ')}`);
}
console.log(`\n=== ${tot} still short ===`);

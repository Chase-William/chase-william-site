import { c as create_ssr_component, a as add_attribute, b as each, e as escape, v as validate_component } from "../../chunks/index-13c0de55.js";
var Tags_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-1gkmt0p{border:solid #7D869C55 2px;border-radius:20px;padding:0 1em;margin:0.3em;font-size:smaller}",
  map: null
};
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags } = $$props;
  let { style = void 0 } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$3);
  return `


<div${add_attribute("style", style, 0)}>
  ${each(tags, (tag) => {
    return `<span class="${"svelte-1gkmt0p"}">${escape(tag)}</span>`;
  })}
</div>`;
});
var MeetMe_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#about-container.svelte-9m9762{display:flex;justify-content:center;flex-direction:column}#horizontal-line.svelte-9m9762{max-width:1400px;margin-bottom:0.2em;height:2px;background-image:linear-gradient(to left, #7D869C00, #7D869C66, #7D869C66, #7D869C00)}img.svelte-9m9762{width:100%;margin:2.5%;border-radius:50%}#selfie-container.svelte-9m9762{max-width:120px;min-width:90px;display:flex;border-radius:50%;box-shadow:5px 5px 5px #BBBD;margin:auto}h2.svelte-9m9762{margin:1em;font-size:larger;text-align:center;font-weight:lighter}@media only screen and (min-width: 500px){h2.svelte-9m9762{text-align:left;margin:auto 1em}#about-container.svelte-9m9762{display:flex;flex-direction:row}#selfie-container.svelte-9m9762{margin:0}#horizontal-line.svelte-9m9762{margin-top:1em}}@media only screen and (min-width: 1300px){#about-container.svelte-9m9762{position:relative;z-index:1}#selfie-container.svelte-9m9762{max-width:200px;position:relative;z-index:2}img.svelte-9m9762{position:relative;z-index:3}h2.svelte-9m9762{margin:3.5em 0 0 1em}#horizontal-line.svelte-9m9762{position:relative;background-image:linear-gradient(to left, #7D869C00, #7D869C66, #7D869C66, #7D869C00);z-index:0;margin:-6.0em auto 0 auto}#tags.svelte-9m9762{margin:0.5em 0 0 7.0em}}",
  map: null
};
const MeetMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { about } = $$props;
  let { tags } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$2);
  return `



<div id="${"about-container"}" class="${"svelte-9m9762"}"><div id="${"selfie-container"}" class="${"svelte-9m9762"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="${"svelte-9m9762"}"></div>     
  <h2 class="${"svelte-9m9762"}">${escape(about)}</h2></div>
<div id="${"horizontal-line"}" class="${"svelte-9m9762"}"></div>
<div id="${"tags"}" class="${"svelte-9m9762"}">${validate_component(Tags, "Tags").$$render($$result, { tags }, {}, {})}
</div>`;
});
var ProjectCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "[style=left]{display:flex;flex-wrap:wrap}.svelte-1q9du2r{margin:0;padding:0}#project-card.svelte-1q9du2r{display:flex}#project-info-container.svelte-1q9du2r{display:flex;flex-wrap:wrap;flex-direction:column;width:100%;margin:auto 0}#name-with-tags.svelte-1q9du2r{display:flex;flex-direction:column;width:50%}#goto-container.svelte-1q9du2r{width:50%;text-align:right}#project-body.svelte-1q9du2r{text-align:left}#project-icon.svelte-1q9du2r{width:14%;min-width:100px;padding:2em}#tags.svelte-1q9du2r{align-self:flex-start}img.svelte-1q9du2r{width:100%;box-shadow:5px 5px 5px #BBBD;border-radius:10%}a.svelte-1q9du2r{text-decoration:underline;color:#08070899}@media only screen and (max-width: 700px){#project-card.svelte-1q9du2r{display:block}#project-icon.svelte-1q9du2r{margin:0 auto}}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { src } = $$props;
  let { alt } = $$props;
  let { tags } = $$props;
  let { github } = $$props;
  let { nuget } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.github === void 0 && $$bindings.github && github !== void 0)
    $$bindings.github(github);
  if ($$props.nuget === void 0 && $$bindings.nuget && nuget !== void 0)
    $$bindings.nuget(nuget);
  $$result.css.add(css$1);
  return `


<div id="${"project-card"}" class="${"svelte-1q9du2r"}"><div id="${"project-icon"}" class="${"svelte-1q9du2r"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="${"svelte-1q9du2r"}"></div>
  <div id="${"project-info-container"}" class="${"svelte-1q9du2r"}"><div id="${"project-header"}" style="${"display: flex;"}" class="${"svelte-1q9du2r"}"><div id="${"name-with-tags"}" class="${"svelte-1q9du2r"}"><h2 style="${"text-align: left; font-weight: lighter;"}" class="${"svelte-1q9du2r"}">${escape(title)}</h2>
        <div id="${"tags"}" class="${"svelte-1q9du2r"}">${validate_component(Tags, "Tags").$$render($$result, { style: "left", tags }, {}, {})}</div></div>
      <div id="${"goto-container"}" class="${"svelte-1q9du2r"}">${github !== "" ? `<p class="${"svelte-1q9du2r"}">Available on <a${add_attribute("href", github, 0)} target="${"_blank"}" class="${"svelte-1q9du2r"}">Github</a></p>` : ``}
        ${nuget !== "" ? `Published with <a${add_attribute("href", nuget, 0)} target="${"_blank"}" class="${"svelte-1q9du2r"}">Nuget</a>` : ``}</div></div>
    <div id="${"project-body"}" class="${"svelte-1q9du2r"}"><p class="${"svelte-1q9du2r"}">The plan for LilWidgets is to empower Xamarin.Forms developers by providing 
        unique custom controls that otherwise would take away from the core app development. 
        This repository will always be open source and under the MIT license. 
        Therefore, future releases and updates will be fully available.
      </p>
      <p style="${"margin-top: 0.5em;"}" class="${"svelte-1q9du2r"}">Checkout the readme!
      </p></div></div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1oq1y15{font-family:'Centaur', Courier, monospace;color:#7D869C;background-color:#FEFEFF;text-align:center;padding:1em;margin:0 auto}#content-body.svelte-1oq1y15{max-width:900px;margin:5em auto;display:flex;flex-direction:column;row-gap:3em}.divider.svelte-1oq1y15{padding:3em}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1oq1y15"}"><div>${validate_component(MeetMe, "MeetMe").$$render($$result, {
    src: "chase.jpg",
    alt: "Chase William Roth",
    about: "Hello, I'm Chase \u{1F44B} I'm a 4th year Web and Mobile Computing undergraduate at Rochester Institute of Technology.",
    tags: ["C#", "TypeScript", "Xamarin", "Svelte ", "Java", "React", "GoLang"]
  }, {}, {})}</div>

  <div class="${"divider svelte-1oq1y15"}"></div>
  
  <div id="${"content-body"}" class="${"svelte-1oq1y15"}">${validate_component(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Lil Widgets",
    src: "lilwidgets.png",
    alt: "Lil Widgets",
    github: "https://github.com/Chase-William/LilWidgets",
    nuget: "https://www.nuget.org/packages/LilWidgets.Xamarin.Forms/1.1.1-alpha",
    tags: ["C#", "Xaml", "Library", "Animation", "Nuget"]
  }, {}, {})}
	
    ${validate_component(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Blue Query",
    src: "bluequery.png",
    alt: "Blue Query",
    github: "https://github.com/Chase-William/BlueQuery",
    nuget: "",
    tags: ["C#", "Json", "Discord Bot"]
  }, {}, {})}</div>
</main>`;
});
export { Routes as default };

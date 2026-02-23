---
title: {{ site.data.nav[page.name | split: "." | first].title }}
nav_order: {{ site.data.nav[page.name | split: "." | first].nav_order }}
---


# Architecture of Mind from functionality POV
{: #diagram-mind-arch}
<p>
  <p style="text-align: center; font-style: italic"></p>
  <div style="display:flex; justify-content:center;">
    <div style="display: grid; place-items: center; position: relative;">
      <span style="opacity:0;grid-area: 1 / 1;"></span>
      <img style="grid-area: 1 / 1;" src="{{ '/diagrams/MindArchLegend.svg' | relative_url}}"><br>
    </div>
  </div>
</p>
<p>
  <p style="text-align: center; font-style: italic">Mind architecture</p>
  <div style="display:flex; justify-content:center;">
    <div style="display: grid; place-items: center; position: relative;">
      <span style="opacity:0;grid-area: 1 / 1;"></span>
      <img style="grid-area: 1 / 1;" src="{{ '/diagrams/MindArch.svg' | relative_url}}"><br>
    </div>
  </div>
</p>

## Perception
- Since birth, cognitive model develops continuously from information is gathered from environment in recurrent process. 
- Information perception involves below co-occurring functions:
### Emotions:
- Realtime emotional response to incoming data/experiences.
### Cognitive biases: 
- Full <new-tab-link href="https://upload.wikimedia.org/wikipedia/commons/6/65/Cognitive_bias_codex_en.svg">cognitive bias codex here</new-tab-link>.
- Sampling biases/data biases:
  - Perception of specific event, information is supported by the existing contextual information which may not be accurate sampling of actual reality leading to skewed perception.
  - Even if existing information is a good sample, the sample actually to used for perception, decision-making maybe be skewed due to incoming information.
  - Information/perception about self is primarily driven by environmental/social feedback which can be skewed leading to distorted self-perception as does the prolonged thinking about either "positive" or "negative" points.
  - If information is emotionally stimulating, it will influence decision-making/conclusion and memory retrieval WRT emotional valence.
  - Various personal experiences including emotional, acts as data to allow empathising with respective context. Absence of contextual experiences may create empathy gap.
- Identity biases:
  - Prioritising self group affiliation over other identities.
  - Tendency to accept and propagate information within identity.
  - Groupthink, herd behaviour, hierarchy, stereotyping bias.
  - Identity biases coupled with sampling bias influences perceived norm of [identity variables](/essays/identity#id-variables)

### [Reward system](/essays/reward_system)
### Learned information
- Information learned in a specific iteration can be used to analyze incoming information in subsequent iterations. Refer to subdiagram below.
- Capable of learning and increase awareness about evolutionary drives– emotions, reward system, biases– and possibly reduce their influence while critical thinking.

<p>
  <p style="text-align: center; font-style: italic">Recurrent usage of learned info</p>
  <div style="display:flex; justify-content:center;">
    <div style="display: grid; place-items: center; position: relative;">
      <span style="opacity:0;grid-area: 1 / 1;"></span>
      <img style="grid-area: 1 / 1;" src="{{ '/diagrams/information ingestion loop.svg' | relative_url}}"><br>
    </div>
  </div>
</p>

## Contemplating over existing data
- As seen in *C1*, contemplating over existing memories and data will lead to simi response from evolutionary components *C2*. In this is case, critical thinking can be more effective due to absence of environmental constraints.
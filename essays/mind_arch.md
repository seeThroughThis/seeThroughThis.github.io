---
title: Mind Architecture
nav_order: 2
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
      <img style="grid-area: 1 / 1;" src="{{ '/diagrams/MindArch.png' | relative_url}}"><br>
    </div>
  </div>
</p>

## Perception
- Since birth, cognitive model develops continuously from information is gathered from environment in recurrent process.
- Information perception involves below co-occurring functions:
### Emotions:
- Realtime emotional response to incoming data/experiences.
### Cognitive biases: 
- Full <new-tab-link href="https://upload.wikimedia.org/wikipedia/commons/6/65/Cognitive_bias_codex_en.svg">cognitive bias codex here</new-tab-link>. Below is attempt to merge most of them into few classes.
- **Sampling biases/data biases**:
  - Perception of specific event, information is supported by the existing contextual information which may not be accurate sampling of actual reality leading to fallacy.
  - Information/perception about self is primarily driven by environmental/social feedback. Distorted feedback lead to distorted self-perception as does the prolonged thinking about either "positive" or "negative" points.
  - Various personal experiences including emotional, acts as data to allow empathising within respective context. Absence of contextual experiences may create empathy gap.
  - We have tendency to accept what aligns with our existing contextual belief sample. Throughout evolution if an individual has survived till age of 20-30, that means individual have likely formed behavioural model from adequate data sample and associations. Rapidly updating model with anomalous data is not likely to be beneficial unless it has high reward, emotional valence or social reference.

---
High-level intuitive expression

$$
support(A) = x, support(\bar{A}) = −x
$$

$$
x = S.E
$$

Dissonance, D = 1 state of belief break, highest cognitive dissonance. D=0 no dissonance
$$
D = 1 − |tanh(x)|
$$


$where$ $A$ and $\bar{A}$ are contradictory statements/information,

S = Salience (reward, emotional, social reference)

E = Net evidence state for a statement, Support - Contradiction

Considering this, Individual will have to keep gathering information within context to break out of cognitive dissonance if exist. (Update E)

---

- **Association biases**:
  - Association between information/data is supposed to be driven by semantic meaning but prone to malformation if reinforced by environment especially not observed first hand or is abstract.
  - Even if existing information is a good sample, the sample actually to used for perception, decision-making maybe be inaccurate due to incoming information or environmental constraints.
  - Within context, recently learned or frequently accessed/reinforced information is likely to influence thought process regardless of relevance.
  - If information is emotionally stimulating, its association tend to influence decision-making, conclusion and memory retrieval with respect to emotion and its valence.
- **Identity biases**:
  - Prioritising self group affiliation over other identities in various situations including economic activity. Tendency to accept and propagate information within identity.
  - Accepting information with high social reference. Behaving based on social truth despite awareness about it being factually false.
  - Acceptability of information and behaviour based on perceived ranks within social hierarchy.
  - Heightened emotional response to information regarding self two-traits, enabling collective response to threats.
  - Tendency to live close community with shared identity variables.
  - Tendency to identify encultured behaviour as inborn/genetic.
  - Identity biases coupled with data sampling and association:
    - Influences perceived norm of various [identity variables](/essays/identity#id-variables), cultural beliefs and practices.
    - Sentiments and opinion towards self-identity and other identities (identity wiring).

### [Reward system](/essays/reward_system)
### Learned information
- Information learned in a specific iteration can be used to analyze incoming information in subsequent iterations. Refer to subdiagram below.
- Capable of learning and increase awareness about evolutionary drives (emotions, reward system, biases) and possibly reduce their influence while critical thinking.

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
- As seen in *C1*, contemplating over existing memories and data will lead to similar response from evolutionary components *C2*. In this is case, critical thinking can be more effective due to absence of environmental constraints.
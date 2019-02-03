# React State Management

## Overview
This tutorial uses a simple "Name That Pirate" game to demonstrate `React` State
Management principals.

Objectives:
- Archetypal UI Architecture
- Why is State Management hard in `React`?
- Experimentation and Research
    * `React Component State API`
    * `React Context API`
    * Build your own State Container
    * `Redux`

## Archetypal UI Architecture

UI Architectures
- Model View Controller (MVC)
- Model View Presenter (MVP)
- Model View View-Model (MVVM)
- Model View Intent (MVI)

Does it matter?
- Absolutely, in some contexts it does

Does it matter to us?
- Maybe, but that's a problem for another day...
- Today, assume MVI is what we are *aspiring* to.

Model View Intent

![Model-View-Intent](mvi.png)

- Model
    * Single source of truth
    * Holds entire state of the UI
        ```javascript
        let model = {};
        ```
- View
    * Transforms the model into a UI
    * At any moment, the UI can be generated from nothing but the model
    * `React` portion of the architecture.
        ```javascript
         let view = (m) => <.../>;
         ```
- Intent
    * User actions, system events, etc...
    * Intents are applied to the model, which is passed to the view to generate
        a new UI
        ```javascript 
        let update = (model, intent) => new_model;
       ```
- Essentially a finite state machine
    * Model represents all possible states
    * Intents represent all possible transitions

> #### Bottom Line:
> MVI is the UI architecture that we should be aspiring to. The model is the
> entirety of state. The view generates a UI from the model. Intents act upon
> the model to mutate the model.

> #### Quiz 1
> What portion of the MVI architecture does `React` provide?
>   * Model
>   * View
>   * Intent
>
> [Answers](Q1.md)

## Why is State Management Hard in React?
Why is State Management a larger concern in `React` than in other UI frameworks?

At `React`'s inception:
- Was not a *framework*, it was a *library*
- Only addressed the *view* portion of the domain
- Proverbial "Freedom vs. Productivity" Debate

Existing solutions for Model and View:
- `React` state management features added ex post facto
    * `Component State API`
    * `Context API`
- Popular State Management solutions
    * `Redux`
    * `MobX State Tree`
    * `Unstated` (the new hotness)
    * Soooooo many more
- Which one is best?
    * As with most things, it's highly context dependant
- Which one's are bad?
    * None, they all have intended use cases
- How do I know which one best fits my use case?
    * Experience, Experiment, and Research...

> #### Bottom Line:
> When using React, the Model and Intent portions of an MVI architecture must be
> supplied by the user. There are many "bolt on" options. While choices are
> good, they come with responsibility. The only way to make a good choice is to
> truly understand the alternatives.

> #### Quiz 2
> The fact that `React` forces developers to choose their own solution for
> managing state:
>   * is a prodigious evil so heinous that it is an affront on nature itself.
>   * is useful for applications with specialized needs.
>   * has a negative impact on productivity.
>   * is so profound that `React` apps are endowed with spiritual qualities.
>
> [Answers](Q2.md)

## Obligatory History and Conjecture
> Feel free to skip this section. The intent is to point out the somewhat
> capricious nature of the JS community. It should not be interrupted as a
> condemnation.  The speed at which the community iterates has many positive
> effects. Furthermore, the timeline is largely apocryphal.

A bit of history based on personal observation:

Sequence of Events:
- `React` has no mechanism for handling state
- Flux pattern (popular in desktop dev) rises to prominence
- Community declares flux boilerplate code tiresome, irksome even
- `Redux` implements Flux: WOO HOO! A framework that implements flux without the
    boilerplate. All of our dreams are manifest!
- `React` creates `Component State API`
- Community rejects `Component State API` because it's not "functional" and has a
    "prop drilling" problem.
- The `Redux` panacea start to crumble as community feels pain due to complexity
    and opacity.
- Factions in the community start to coalesce around new solutions such as
    `MobX`
- `React` implements `Context API`
- Factions in the community start proselytizing: "hey, maybe inherit `React`
    state management this isn't so bad..."
- Community says, "if `React` state management isn't so bad, we should create
    another framework" - and thus `Unstated` was born.

There has been much churn concerning best practices in this domain. Following
"standards" (using the term loosely) today does not shield against the future.
The JS world is fickle, we shouldn't be...

> #### Moral of this Story:
> Telling a developer that there is an existing mechanism for dealing with a
> challenge is like telling a musician that there is already a song about love.

## Experiment and Research
The best way to understand state management is via example. Start by cloning
this project with the following command:

```bash
git clone https://github.com/dalealleshouse/rading-react.git
```
Complete the exercises in each subsection below.

### React Component State API
The purpose of this section is to build competency with the `React State API` by
examining an example application.

> #### Exercise 1:
> 1. Navigate to the `state-api` directory and run the following commands:
>
>       ```bash
>       npm install
>       npm start
>       ```
> 2. Once the app loads, play the `Name that Pirate` game to familiarize
>    yourself with the app
>
> 3. Open the `state-api` folder using your favorite editor (your favorite
>    editor should be vim, but anyway...) and familiarize yourself with the
>    `React` components

#### Important Concepts:
- All state is maintained in `React.Component` `state` and `props`. Therefore,
    state is localized to each component.
  * `props` are immutable
  * `state` is mutable.

- While `state` is mutable, the means of mutation is constrained to the
    `setState` function.
  * `setState` informs the component and its children to re-render based on the
      new state.
  * Any mutations outside of `setState` will NOT trigger a re-render.

- State is shared between components via `props`.
    * Some `props` simply pass static data
    * Other `props` pass functions that can pass data back out of a component.
        (See example below)

    ``` javascript
    // When an answer is clicked, it passes its pirate property to it's parent
    // via the its onSelected property.
    // Answer.js
    ...
    <div
      className="card mb-3 answer"
      onClick={() => {
        if (!props.disabled) props.onSelected(props.pirate);
      }}>
    ...

    // GameBoard sets Answer's onSelected property to its own
    // handleAnswerSelected method. In this way, the parent (GameBoard) is able
    // to get data from it's child (Answer)
    // GameBoard.js
    ...
    <Answer
      key={p.name}
      pirate={p}
      onSelected={this.handleAnswerSelected}
      disabled={p.disabled}
    />
    ...
    ```

> #### Exercise 2:
> 1. Add a Reset Score button to the state-api app. When clicked, the button
>    should update the correct and incorrect counts to zero.

#### Pros
- Simplicity
- Little to no "magic" - no hidden logic

#### Cons
- Data sharing is only possible via a component Parent/Child relationship

### React Context API

### Build Your Own State Container

### Redux

### Unstated

Abstraction on top of Model-View-Intent that encapsulates the model and update
components.

Methods
- getState() - returns application state
- dispatch() - applies an intent to the state
- subscribe() - registers a callback to be called when the state changes

    > #### Quiz
    > What pattern does the Custom State Container adhere to?
    > 1. Observer
    > 1. State Machine
    > 1. Publisher/Subscriber
    > 1. Singleton

### `Redux`

- Useful when you have multiple components that need to share state that do not
    have a parent child relationship

- "...if you aren't sure if you need [Redux], you don't need it" - Pete Hunt

- When you choose redux to solve the prop-drilling problem, you're bringing in a
    cost that is intended to solve problems you don’t have and hence the cost is
    greater than the benefit.

Cory House
Putting `Redux` in our company framework by default was a mistake.
- People connect *every* component
- People embed `Redux` in "reusable" components
- Everyone uses `Redux`, even when they don't need it
- People don't know how to build an app with just `React`

    Intended to make flux more palatable 

    Provides a degree of standardization
    Opaque

---
Bibliography

While not directly quoted above, the following sources greatly influenced this
piece of work:

- Dan Abramov -
    https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
- Rajat S -
    https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3
- Kent C. Dodds -
    https://blog.kentcdodds.com/application-state-management-66de608ccb24
- Liam McLeenna -
    https://app.pluralsight.com/library/courses/react-fundamentals-update/table-of-contents
- Daniel Schulz -
    https://medium.com/dailyjs/comparison-of-state-management-solutions-for-react-2161a0b4af7b

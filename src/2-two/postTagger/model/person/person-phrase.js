export default [
  // ==== Honorifics ====
  { match: '[(1st|2nd|first|second)] #Honorific', group: 0, tag: 'Honorific', reason: 'ordinal-honorific' },
  {
    match: '[(private|general|major|corporal|lord|lady|secretary|premier)] #Honorific? #Person',
    group: 0,
    tag: 'Honorific',
    reason: 'ambg-honorifics',
  },
  // ==== FirstNames ====
  //is foo Smith
  { match: '#Copula [(#Noun|#PresentTense)] #LastName', group: 0, tag: 'FirstName', reason: 'copula-noun-lastname' },
  //pope francis
  {
    match: '(lady|queen|sister|king|pope|father) #ProperNoun',
    tag: 'Person',
    reason: 'lady-titlecase',
    safe: true,
  },

  // ==== Nickname ====
  // Dwayne 'the rock' Johnson
  { match: '#FirstName [#Determiner #Noun] #LastName', group: 0, tag: 'Person', reason: 'first-noun-last' },
  {
    match: '#ProperNoun (b|c|d|e|f|g|h|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z) #ProperNoun',
    tag: 'Person',
    reason: 'titlecase-acronym-titlecase',
    safe: true,
  },
  { match: '#Acronym #LastName', tag: 'Person', reason: 'acronym-lastname', safe: true },
  { match: '#Person (jr|sr|md)', tag: 'Person', reason: 'person-honorific' },
  //remove single 'mr'
  { match: '#Honorific #Acronym', tag: 'Person', reason: 'Honorific-TitleCase' },
  { match: '#Person #Person the? #RomanNumeral', tag: 'Person', reason: 'roman-numeral' },
  { match: '#FirstName [/^[^aiurck]$/]', group: 0, tag: ['Acronym', 'Person'], reason: 'john-e' },
  //j.k Rowling
  { match: '#Noun van der? #Noun', tag: 'Person', reason: 'van der noun', safe: true },
  //king of spain
  { match: '(king|queen|prince|saint|lady) of #Noun', tag: 'Person', reason: 'king-of-noun', safe: true },
  //lady Florence
  { match: '(prince|lady) #Place', tag: 'Person', reason: 'lady-place' },
  //saint Foo
  { match: '(king|queen|prince|saint) #ProperNoun', tag: 'Person', reason: 'saint-foo' },

  // al sharpton
  { match: 'al (#Person|#ProperNoun)', tag: 'Person', reason: 'al-borlen', safe: true },
  //ferdinand de almar
  { match: '#FirstName de #Noun', tag: 'Person', reason: 'bill-de-noun' },
  //Osama bin Laden
  { match: '#FirstName (bin|al) #Noun', tag: 'Person', reason: 'bill-al-noun' },
  //John L. Foo
  { match: '#FirstName #Acronym #ProperNoun', tag: 'Person', reason: 'bill-acronym-title' },
  //Andrew Lloyd Webber
  { match: '#FirstName #FirstName #ProperNoun', tag: 'Person', reason: 'bill-firstname-title' },
  //Mr Foo
  { match: '#Honorific #FirstName? #ProperNoun', tag: 'Person', reason: 'dr-john-Title' },
  //peter the great
  { match: '#FirstName the #Adjective', tag: 'Person', reason: 'name-the-great' },

  // dick van dyke
  { match: '#ProperNoun (van|al|bin) #ProperNoun', tag: 'Person', reason: 'title-van-title', safe: true },
  //jose de Sucre
  { match: '#ProperNoun (de|du) la? #ProperNoun', tag: 'Person', reason: 'title-de-title' },
  //Jani K. Smith
  { match: '#Singular #Acronym #LastName', tag: '#FirstName #Person .', reason: 'title-acro-noun', safe: true },
  //Foo Ford
  { match: '[#ProperNoun] #Person', group: 0, tag: 'Person', reason: 'proper-person', safe: true },
  // john keith jones
  { match: '#Person [#ProperNoun #ProperNoun]', group: 0, tag: 'Person', ifNo: '#Possessive', reason: 'three-name-person', safe: true },
  //John Foo
  { match: '#FirstName #Acronym? [#ProperNoun]', group: 0, tag: 'LastName', ifNo: '#Possessive', reason: 'firstname-titlecase' },
  // john stewart
  { match: '#FirstName [#FirstName]', group: 0, tag: 'LastName', reason: 'firstname-firstname' },
  //Joe K. Sombrero
  { match: '#FirstName #Acronym #Noun', tag: 'Person', reason: 'n-acro-noun', safe: true },
  //Anthony de Marco
  { match: '#FirstName [(de|di|du|van|von)] #Person', group: 0, tag: 'LastName', reason: 'de-firstname' },
  //Joe springer sr
  { match: '#ProperNoun [#Honorific]', group: 0, tag: 'Person', reason: 'last-sr' },
  // dr john foobar
  { match: '#Honorific #FirstName [#Singular]', group: 0, tag: 'LastName', ifNo: '#Possessive', reason: 'dr-john-foo', safe: true },
  //his-excellency
  {
    match: '[(his|her) (majesty|honour|worship|excellency|honorable)] #Person',
    group: 0,
    tag: ['Honorific', 'Person'],
    reason: 'his-excellency',
  },
  //general pearson
  { match: '#Honorific #Person', tag: 'Person', reason: 'honorific-person' },
]

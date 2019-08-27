const makeJournalEntryComponent =  {
    buildEntryCard:(singleJournalObject)=>{
      // Create your own HTML structure for a journal entry
      return `
      <article>
    <h3>${singleJournalObject.date}</h3>
    <h4>${singleJournalObject.concept}</h4>
    <p>${singleJournalObject.entry}</p>
    <h6>${singleJournalObject.mood}</h6>
    </article>
      `;}
    }
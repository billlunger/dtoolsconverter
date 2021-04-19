import React from 'react';
import Quotes from './Quotes'


class Opportunities extends React.Component {
  
  state = {
    loading: true,
    opportunities: [],
    quotes: [],
    client: 'Resistance is useless',
    quoteName: '',
    quote: [],
    down1: '',
    down2:'',
    down3:'',
    down4:'',
    down5: '',
    down6: '',
    down1T: '',
    down2T: '',
    down3T: '',
    down4T: '',
    down5T: '',
    down6T: '',
    down1Name:undefined,
    down2Name:undefined,
    down3Name:undefined,
    down4Name:undefined,
    down5Name:undefined,
    down6Name:undefined,
    down1NameT:undefined,
    down2NameT:undefined,
    down3NameT:undefined,
    down4NameT:undefined,
    down5NameT:undefined,
    down6NameT:undefined,
  };

  async listQuotes(sub) {
    const url = `https://dtools.hopto.org/api/getOpps/${sub.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({quotes: data,
      loading: false,
      opportunities:[],
      client: sub.client,
      down1Name:undefined,
      down2Name:undefined,
      down3Name:undefined,
      down4Name:undefined,
      down5Name:undefined,
      down6Name:undefined,
      down1NameT:undefined,
      down2NameT:undefined,
      down3NameT:undefined,
      down4NameT:undefined,
      down5NameT:undefined,
      down6NameT:undefined,})
    console.log(data,'Data');
    console.log(sub, 'sub')
  }

  async getQuote(quote) {
    console.log(quote,'GetQuote');
    this.setState({down1Name: 'Magic in Progress',
    down2Name: undefined,
    down3Name: undefined,
    down4Name: undefined,
    down5Name: undefined,
    down6Name: undefined,
    down1NameT:undefined,
    down2NameT:undefined,
    down3NameT:undefined,
    down4NameT:undefined,
    down5NameT:undefined,
    down6NameT:undefined,
    quoteName: quote.name,
    quote: quote.id,
  })
    const url = `https://dtools.hopto.org/api/getQuote/${quote.id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data,'Single Quote');
    const qName = this.state.quoteName.replace(/[^a-zA-Z0-9-.,& ]/g,'-')
    this.setState({
    down1Name: 'Download Single CSV',
    down1NameT: 'Download Single TXT',
    down1: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}(${data[0]}).csv`,
    down1T: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}(${data[0]}).txt`,})
    //console.log(data,'GetQuoteData');
    //console.log(this.state.down5Name)
    
  }

  async getPhase(quote) {
    console.log(quote);
    this.setState({down1Name: 'Converting',
    down2Name: undefined,
    down3Name: undefined,
    down4Name: undefined,
    down5Name: undefined,
    down6Name: undefined,
    down1NameT:undefined,
    down2NameT:undefined,
    down3NameT:undefined,
    down4NameT:undefined,
    down5NameT:undefined,
    down6NameT:undefined,
    quoteName: quote.name,
    quote: quote.id,
  })
    const url = `https://dtools.hopto.org/api/getPhases/${quote.id}`;
    const response = await fetch(url);
    const data = await response.json();
    const qName = this.state.quoteName.replace(/[^a-zA-Z0-9-.,& ]/g,'-')
    this.setState({phases: data,
      down1: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[1]}(${data[0]}).csv`,
      down1T: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[1]}(${data[0]}).txt`,
      down2: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[2]}(${data[0]}).csv`,
      down2T: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[2]}(${data[0]}).txt`,
      down3: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[3]}(${data[0]}).csv`,
      down3T: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[3]}(${data[0]}).txt`,
      down4: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[4]}(${data[0]}).csv`,
      down4T: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[4]}(${data[0]}).txt`,
      down5: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[5]}(${data[0]}).csv`,
      down5T: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[5]}(${data[0]}).txt`,
      down6: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[6]}(${data[0]}).csv`,
      down6T: `https://dtools.hopto.org/api/download/${this.state.client}-${qName}-${data[6]}(${data[0]}).txt`,
      down1Name: `${data[1]} CSV`,
      down1NameT: `${data[1]} TXT`,
      down2Name: data[2],
      down2NameT: `${data[2]} TXT`,
      down3Name: data[3],
      down3NameT: `${data[3]} TXT`,
      down4Name: data[4],
      down4NameT: `${data[4]} TXT`,
      down5Name: data[5],
      down5NameT: `${data[5]} TXT`,
      down6Name: data[6],
      down6NameT: `${data[6]} TXT`,
    })
    console.log(data);
    //console.log(this.state.down5Name)
  }

  async componentDidMount() {
    const url = "https://dtools.hopto.org/api/opportunities";
    const getCreds = ""
    try{
      console.log('Trying to Get Opportunities')
      const response = await fetch(url);
      const data = await response.json();
      console.log('Opps came back')
      this.setState({opportunities: data, loading: false, quotes:[], client:'Opportunities'})
      console.log(data);
    }catch(err){
      console.log('Got and Error')
      console.log(err)
    const response = await fetch(getCreds);
    const data = await response;
    //this.setState({opportunities: data, loading: false, quotes:[], client:'Opportunities'})
    console.log(data);}

    //console.log('Opps came back')
    //this.setState({opportunities: data, loading: false, quotes:[], client:'Opportunities'})
    //console.log(data);
  }

  render() {
    
    return (
      <div>
        {this.state.loading || !this.state.opportunities || !this.state.quotes ? (
        <h2>{this.state.client}</h2> 
        ):(
        <div >
          <h2>{this.state.client}</h2>
          {this.state.opportunities.map((opp) => 
          <div  key={opp.stageId}>
              {opp.opportunities.map((sub)=>
              <h3 className='task' key={sub.id}>{sub.client}
              <li>{sub.name}</li>
              <li>{sub.number}</li>
              <li>{sub.stage}</li>
              <li>${sub.price}</li>
              <li>{sub.owner}</li>
              <button onClick={this.listQuotes.bind(this,sub)} className='btn'> Get Quotes </button> 
              </h3>
              )}
            </div>
          )}
          
          <div >
          {this.state.quotes.map((quote) => 
            
            <h3 className='task' key={quote.id}>
              <div>
              <li>{quote.name}</li>
              <li>{quote.number}</li>
              <li>{quote.stage}</li>
              <li>${quote.price}</li>
              <li>Version {quote.version}</li>
              <button  onClick={this.getQuote.bind(this,quote)} className='btn'> Convert  Single Quote </button>
              <button  onClick={this.getPhase.bind(this,quote)} className='btn'> Convert Phases </button>
              <Quotes
                name={quote.name}
                id={quote.id}
                number={quote.number}
                stage={quote.stage}
                price={quote.price}
                getQuote={this.getQuote}
                state={this.state}
                quote={this.state.quote}
                downloadQuote={this.downloadQuote}
                />
                 
                </div>  
               
                
            </h3>
            
          )}
          </div>

          <button onClick={this.componentDidMount.bind(this)} className='btn-load'>Load Quotes</button>
          
        </div>
        )}
      </div>
    )
  }
}

export default Opportunities;


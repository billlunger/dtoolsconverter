import React from 'react';
import Quotes from './Quotes'


class Opportunities extends React.Component {
  
  state = {
    loading: true,
    opportunities: [],
    quotes: [],
    client: 'Loading...',
    quoteName: '',
    quote: [],
    down1: '',
    down2:'',
    down3:'',
    down4:'',
    down5: '',
    down6: '',
    down1Name:undefined,
    down2Name:undefined,
    down3Name: undefined,
    down4Name: undefined,
    down5Name: undefined,
    down6Name: undefined,
  };

  async listQuotes(sub) {
    const url = `http://lunger1.homeip.net:5000/api/getOpps/${sub.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({quotes: data,
      loading: false,
      opportunities:[],
      client: sub.client,
      down1Name:undefined,
      down2Name:undefined,
      down3Name:undefined,
      down4Name: undefined,
      down5Name: undefined,
      down6Name: undefined,})
    console.log(data,'Data');
    console.log(sub, 'sub')
  }

  async getQuote(quote) {
    console.log(quote,'GetQuote');
    this.setState({down1Name: 'Converting',
    down2Name: undefined,
    down3Name: undefined,
    down4Name: undefined,
    down5Name: undefined,
    down6Name: undefined,
    quoteName: quote.name,
    quote: quote.id,
  })
    const url = `http://lunger1.homeip.net:5000/api/getQuote/${quote.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({phases: data, down1Name: 'Download Signle Quote',
    down1: `http://lunger1.homeip.net:5000/api/download/${this.state.client}-${this.state.quoteName}`,})
    console.log(data,'GetQuoteData');
    //console.log(this.state.down5Name)
    
  }

  async getPhase(quote) {
    console.log(quote);
    this.setState({down1Name: 'Converting',
    down2Name: undefined,
    down3Name: undefined,
    down4Name: undefined,
    down5Name: undefined,
    Down6Name: undefined,
    quoteName: quote.name,
    quote: quote.id,
  })
    const url = `http://lunger1.homeip.net:5000/api/getPhases/${quote.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({phases: data,
      down1: `http://localhost:5000/api/download/${this.state.client}-${this.state.quoteName}-${data[0]}`,
      down2: `http://localhost:5000/api/download/${this.state.client}-${this.state.quoteName}-${data[1]}`,
      down3: `http://localhost:5000/api/download/${this.state.client}-${this.state.quoteName}-${data[2]}`,
      down4: `http://localhost:5000/api/download/${this.state.client}-${this.state.quoteName}-${data[3]}`,
      down5: `http://localhost:5000/api/download/${this.state.client}-${this.state.quoteName}-${data[4]}`,
      down6: `http://localhost:5000/api/download/${this.state.client}-${this.state.quoteName}-${data[6]}`,
      down1Name: data[0],
      down2Name: data[1],
      down3Name: data[2],
      down4Name: data[3],
      down5Name: data[4],
      down6Name: data[5],
    })
    console.log(data);
    //console.log(this.state.down5Name)
  }

  async componentDidMount() {
    const url = "//lunger1.homeip.net:5000/api/opportunities";
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

          <button onClick={this.componentDidMount.bind(this)} className='btn'>Load Quotes</button>
          
        </div>
        )}
      </div>
    )
  }
}

export default Opportunities;


import React from 'react';
import { Consumer } from './Context';


const SearchForm = () => {
  const itemName = React.createRef();
  const lowestPrice = React.createRef();
  const lowestHQ = React.createRef();
  const gilLastWeek = React.createRef();
  const transactions = React.createRef();
  const lvl = React.createRef();


  return (
    <Consumer>
      {context => {

        const Search = (e) => {
          e.preventDefault();
          // console.log('search action:', context);
          context.actions.search(
            itemName.current.value,
            lowestPrice.current.value,
            // qty.current.value,
            lowestHQ.current.value,
            gilLastWeek.current.value,
            transactions.current.value,
            lvl.current.value,
          )
        }

        return (
          <div className="search-background">
            <form onSubmit={Search}>

              <div className="row class-row">
                <div className="col-1"></div>
                <div className="col-3 vertical-center"><h3>Search:</h3></div>
                <div className="col">
                  <div className="row">
                    <div className="class-icon" data-tippy="Alchemist">
                      <img src={context.filterClass.alchemist ? (process.env.PUBLIC_URL + '/Icons/alchemist-a.png') : (process.env.PUBLIC_URL + '/Icons/alchemist.png')}
                        alt="Alchemist"
                        id="Alchemist"
                        onClick={(e) => context.actions.filterClass(e, 'Alchemist')}></img>
                      <p>{context.filterClass.alchemist}</p>
                    </div>
                    <div className="class-icon" data-tippy="Armorer">
                      <img src={context.filterClass.armorer ? (process.env.PUBLIC_URL + '/Icons/armorer-a.png') : (process.env.PUBLIC_URL + '/Icons/armorer.png')}
                        alt="Armorer"
                        id="Armorer"
                        onClick={(e) => context.actions.filterClass(e, 'Armorer')} ></img>
                    </div>
                    <div className="class-icon" data-tippy="Blacksmith">
                      <img src={context.filterClass.blacksmith ? (process.env.PUBLIC_URL + '/Icons/blacksmith-a.png') : (process.env.PUBLIC_URL + '/Icons/blacksmith.png')}
                        alt="Blacksmith"
                        id="Blacksmith"
                        onClick={(e) => context.actions.filterClass(e, 'Blacksmith')}></img>
                    </div>
                    <div className="class-icon" data-tippy="Carpenter">
                      <img src={context.filterClass.carpenter ? (process.env.PUBLIC_URL + '/Icons/carpenter-a.png') : (process.env.PUBLIC_URL + '/Icons/carpenter.png')}
                        alt="Carpenter"
                        id="Carpenter"
                        onClick={(e) => context.actions.filterClass(e, 'Carpenter')}></img>
                    </div>
                    <div className="class-icon" data-tippy="Culinarian">
                      <img src={context.filterClass.culinarian ? (process.env.PUBLIC_URL + '/Icons/culinarian-a.png') : (process.env.PUBLIC_URL + '/Icons/culinarian.png')}
                        alt="Culinarian"
                        id="Culinarian"
                        onClick={(e) => context.actions.filterClass(e, 'Culinarian')}></img>
                    </div>
                    <div className="class-icon" data-tippy="Goldsmith">
                      <img src={context.filterClass.goldsmith ? (process.env.PUBLIC_URL + '/Icons/goldsmith-a.png') : (process.env.PUBLIC_URL + '/Icons/goldsmith.png')}
                        alt="Goldsmith"
                        id="Goldsmith"
                        onClick={(e) => context.actions.filterClass(e, 'Goldsmith')}></img>
                    </div>
                    <div className="class-icon" data-tippy="Leatherworker">
                      <img src={context.filterClass.leatherworker ? (process.env.PUBLIC_URL + '/Icons/leatherworker-a.png') : (process.env.PUBLIC_URL + '/Icons/leatherworker.png')}
                        alt="Leatherworker"
                        id="Leatherworker"
                        onClick={(e) => context.actions.filterClass(e, 'Leatherworker')}></img>
                    </div>
                    <div className="class-icon" data-tippy="Weaver">
                      <img src={context.filterClass.weaver ? (process.env.PUBLIC_URL + '/Icons/weaver-a.png') : (process.env.PUBLIC_URL + '/Icons/weaver.png')}
                        alt="Weaver"
                        id="Weaver"
                        onClick={(e) => context.actions.filterClass(e, 'Weaver')}></img>
                    </div>
                  </div>

                </div>
                <div className="col">
                  <div className="row">
                    <div className="class-icon" data-tippy="Botanist">
                      <img src={context.filterClass.botanist ? (process.env.PUBLIC_URL + 'Icons/botanist-a.png') : (process.env.PUBLIC_URL + 'Icons/botanist.png')}
                        alt="Botanist"
                        id="Botanist"
                        onClick={(e) => context.actions.filterClass(e, 'Botanist')}></img>
                    </div>
                    <div className="class-icon" data-tippy="Fisher">
                      <img src={context.filterClass.fisher ? (process.env.PUBLIC_URL + 'Icons/fisher-a.png') : (process.env.PUBLIC_URL + 'Icons/fisher.png')}
                        alt="Fisher"
                        id="Fisher"
                        onClick={(e) => context.actions.filterClass(e, 'Fisher')}></img>
                    </div>
                    <div className="class-icon" data-tippy="Miner">
                      <img src={context.filterClass.miner ? (process.env.PUBLIC_URL + 'Icons/miner-a.png') : (process.env.PUBLIC_URL + 'Icons/miner.png')}
                        alt="Miner"
                        id="Miner"
                        onClick={(e) => context.actions.filterClass(e, 'Miner')}></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    ref={itemName}
                    placeholder="Item Name" />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    ref={lowestPrice}
                    placeholder="Lowest Price" />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    ref={lowestHQ}
                    placeholder="Lowest HQ Price" />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    ref={gilLastWeek}
                    placeholder="Min Gil Made/week" />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    ref={transactions}
                    placeholder="Min Transactions/week" />
                </div>
                <div className="col-1">
                  <input
                    className="form-control"
                    type="text"
                    ref={lvl}
                    placeholder="Max Lvl" />
                </div>
                <div className="col-1">
                  <input
                    className="search-button"
                    type="submit"
                    value="Search"
                  /></div>

              </div>


            </form>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SearchForm;
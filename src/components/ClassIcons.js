import React from 'react';
import { Consumer } from './Context';


const ClassIcons = () => {

  return (
    <Consumer>
      {({actions, filterClass}) => {
        return (
          <div className="row class-row">
            <div className="col-3 vertical-center"><h3>Jobs to Search:</h3></div>
            <div className="col">
              <div className="row">
                <div className={filterClass.alchemist ? "class-icon active" : "class-icon"} data-tippy="Alchemist">
                  <img src={process.env.PUBLIC_URL + '/Icons/alchemist.png'}
                    alt="Alchemist"
                    id="Alchemist"
                    onClick={(e) => actions.filterClass(e,'Alchemist')}></img>
                   <p>{filterClass.alchemist}</p> 
                </div>
                <div className={filterClass.armorer ? "class-icon active" : "class-icon"} data-tippy="Armorer">
                  <img src={process.env.PUBLIC_URL + '/Icons/armorer.png'}
                    alt="Armorer"
                    id="Armorer"
                    onClick={(e) => actions.filterClass(e,'Armorer')} ></img>
                </div>
                <div className={filterClass.blacksmith ? "class-icon active" : "class-icon"} data-tippy="Blacksmith">
                  <img src={process.env.PUBLIC_URL + '/Icons/blacksmith.png'}
                    alt="Blacksmith" 
                    id="Blacksmith" 
                    onClick={(e) => actions.filterClass(e,'Blacksmith')}></img>
                </div>
                <div className={filterClass.carpenter ? "class-icon active" : "class-icon"} data-tippy="Carpenter">
                  <img src={process.env.PUBLIC_URL + '/Icons/carpenter.png'}
                    alt="Carpenter" 
                    id="Carpenter" 
                    onClick={(e) => actions.filterClass(e,'Carpenter')}></img>
                </div>
                <div className={filterClass.culinarian ? "class-icon active" : "class-icon"} data-tippy="Culinarian">
                  <img src={process.env.PUBLIC_URL + '/Icons/culinarian.png'}
                    alt="Culinarian" 
                    id="Culinarian" 
                    onClick={(e) => actions.filterClass(e,'Culinarian')}></img>
                </div>
                <div className={filterClass.goldsmith ? "class-icon active" : "class-icon"} data-tippy="Goldsmith">
                  <img src={process.env.PUBLIC_URL + '/Icons/goldsmith.png'}
                    alt="Goldsmith" 
                    id="Goldsmith" 
                    onClick={(e) => actions.filterClass(e,'Goldsmith')}></img>
                </div>
                <div className={filterClass.leatherworker ? "class-icon active" : "class-icon"} data-tippy="Leatherworker">
                  <img src={process.env.PUBLIC_URL + '/Icons/leatherworker.png'}
                    alt="Leatherworker" 
                    id="Leatherworker" 
                    onClick={(e) => actions.filterClass(e,'Leatherworker')}></img>
                </div>
                <div className={filterClass.weaver ? "class-icon active" : "class-icon"} data-tippy="Weaver">
                  <img src={process.env.PUBLIC_URL + '/Icons/weaver.png'}
                    alt="Weaver" 
                    id="Weaver" 
                    onClick={(e) => actions.filterClass(e,'Weaver')}></img>
                </div>
              </div>

            </div>
            <div className="col">
              <div className="row">
                <div className={filterClass.botanist ? "class-icon active" : "class-icon"} data-tippy="Botanist">
                  <img src={process.env.PUBLIC_URL + 'Icons/botanist.png'}
                    alt="Botanist" 
                    id="Botanist" 
                    onClick={(e) => actions.filterClass(e,'Botanist')}></img>
                </div>
                <div className={filterClass.fisher ? "class-icon active" : "class-icon"} data-tippy="Fisher">
                  <img src={process.env.PUBLIC_URL + 'Icons/fisher.png'}
                    alt="Fisher" 
                    id="Fisher" 
                    onClick={(e) => actions.filterClass(e,'Fisher')}></img>
                </div>
                <div className={filterClass.miner ? "class-icon active" : "class-icon"} data-tippy="Miner">
                  <img src={process.env.PUBLIC_URL + 'Icons/miner.png'}
                    alt="Miner" 
                    id="Miner" 
                    onClick={(e) => actions.filterClass(e,'Miner')}></img>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ClassIcons;
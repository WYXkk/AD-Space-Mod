import { DC } from "../../constants";
import { AutobuyerState } from "../autobuyer";

export class T2AutoResearcherState extends AutobuyerState {
  get data() {
    return player.auto.T2AutoResearcher;
  }

  get name() {
    return `T2AutoResearcher`;
  }

  get efficiency() {
    if(!this.data.isBought || !this.data.isActive || !player.auto.autobuyersOn) return 0
    if(isSCTierCompleted(3, 1)) return 2
    return 0.5
  }

  get isBought() {
    return this.data.isBought;
  }

  get isUnlocked() {
    return false
  }

  get antimatterCost() {
    return DC.E308;
  }

  get canBeBought() {
    return true;
  }

  get canUnlockSlowVersion() {
    return player.records.thisEternity.maxAM.gte(this.antimatterCost);
  }

  tick() {}

  purchase() {
    if (!this.canUnlockSlowVersion) return;
    this.data.isBought = true;
  }
}

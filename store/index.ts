import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators';
import AxiosService from '@/service/axios.service';
import AxiosResponse from '@/service/axios.service';

interface ItemList {
    id: number;
    content: string;
    status: string;
}


@Module
export default class Store extends VuexModule{
    
    itemList : ItemList[] = []

    //아이템 추가 Mutation
    @Mutation
    addItem(item: ItemList){
        this.itemList.push(item);
    }
    //해당 아이템 제거 Mutation
    @Mutation
    removeItem(id: number){
        const idx = this.itemList.findIndex(function (param) {
            return param.id === id
        })
        this.itemList.splice(idx , 1 );
    }
    //해당 아이템 status 변경
    @Mutation
    changeStatus(item: ItemList){     
        const idx = this.itemList.findIndex(function (param) {
            return param.id === item.id
        })
        if (item.status === 'yet'){  
            this.itemList[idx].status = 'clear';
        } else{
            this.itemList[idx].status = 'yet';
        }
    }

    @Mutation
    setItem(itemList: ItemList[]){
        this.itemList = itemList;
    }

    @Action
    async getItem(){
        const response: AxiosResponse = await AxiosService.instance.get('/data.json');
        console.log(response);
        this.context.commit('setItem', response.data.itemList);
    }
    get setYet(){
        return this.itemList.filter((item: ItemList) => item.status === 'yet')
    }
    get setClear(){
        return this.itemList.filter((item: ItemList) => item.status === 'clear' )
    }


}
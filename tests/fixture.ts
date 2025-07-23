import{test as base} from '@playwright/test';

type myFixture={
    helloWorld:string,
    greatDay:string
}

export const test=base.extend<myFixture>({
    helloWorld: async({},use:any)=>{
        const myworld:string="where is my Tea";
        await use(myworld);
    },
    greatDay:async({},use:any)=>{
        const myday="Have a Grate Day";
        await use(myday);
    }
})
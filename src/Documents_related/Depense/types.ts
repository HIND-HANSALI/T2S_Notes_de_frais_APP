export type CreateDepensesParams={
    name:string;

    justificatif:string;

    created_at:Date;
    category_id:number;
    
}

// export type CreateDepenseCategoriesParams={
//     name: string;
//     unit_price:number;

//     category_id:number;
// }

export type UpdateDepensesParams={
    name:string;

    justificatif:string;

    created_at:Date; 
    category_id:number; 
   
}
export default interface Product {
    name: string;
    size: 'small' | 'medium' | 'large';
    price: number | string;
    description: string;
    icon: string;
    badge?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    category: string;
    publishDate: string;
    author: string;
    commentCount: number;
    readTime?: number;
    tags?: string[];
    slug: string;
}

export interface Review {
    id: string;
    reviewerName: string;
    reviewerRole: string;
    reviewerImage?: string;
    reviewText: string;
}

export interface Uses {
    id: string;
    title: string;
    description: string;
    icon: string;
}


export interface GiftFeature {
    id:string,
    giftTitle:string,
    giftCategory:string,
    giftMaterial:string[],
    giftCode:string,
    giftDimentions:number[],
    giftFeatures:string[]
}
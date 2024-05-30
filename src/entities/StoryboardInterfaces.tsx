// StoryboardActsData.tsx
export interface SequenceProps {
    id: number;
    // Add other properties as needed
    [key: string]: any;
}

export interface StoryboardInfoProps {
    AchillesHeel: string;
    consciousDesire: string;
    dramaticQuestion: string;
    logline: string;
    moralImperative: string;
    moralSphere: string;
    protagonist: string;
    theme: string;
    title: string;
    unconsciousDrive: string;
    ACTS: Array<{ [actName: string]: Array<SequenceProps> }>;
}

export interface StoryboardProp {
    data: StoryboardInfoProps;
}

interface SequenceItem {
    text: string;
    name: string;
    order: number;
    header: string;
    number: number;
}

interface Sequence {
    [sequenceName: string]: SequenceItem[];
}

export interface Act {
    [actName: string]: Sequence;
}

interface StoryboardActData {
    ACTS: Act[];
}

export interface PlotPointProps {
    text: string;
    name: string;
    order: number;
    header: string;
    number: number;
}

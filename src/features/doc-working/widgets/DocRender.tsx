


import { BackgroundGradient } from "@/shared/components/ui/background-gradient";
import { useGetFileMd } from "../hooks/useGetFileMd.hook";



import { MarkdownRenderer } from './MarkdownRenderer';
// p-4 md:p-8 rounded-2xl bg-linear-to-r from-cyan-500 to-gray-500 bg-black/80 backdrop-blur-md shadow-md border-solid border-2 border-black

const DocRender = () => {
    const { normPath, fileName, mdPath } = useGetFileMd();
    
    return (
        <section className="">
            
            <BackgroundGradient>

            
            <h1 className="text-3xl font-bold underline mb-4">{fileName}</h1>
            <p>{normPath}</p>

            {/* {content && (
                <div
                    className="prose prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
                />
            )} */}
            {/* <ReactMarkdown
                
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                
            >
                {content}
            </ReactMarkdown> */}

            {/* <MarkdownRenderer markdownUrl = { normPath } /> */}
            {/* markdownUrl="/README.md" */}
            {/* <MarkdownRender markdown={content} /> */}

         
            {mdPath && <MarkdownRenderer markdownUrl={mdPath} />}
       
            </BackgroundGradient>
        </section>
    );
}

export default DocRender;
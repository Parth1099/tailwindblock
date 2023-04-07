import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "next-share";

const SocialShare = ({ component }) => {
  return (
    <>
      <div className="mt-3 md:mt-5 flex items-center gap-2 ">
        <div className="text-[#00000099] text-[18px] font-normal">Share :</div>
        <FacebookShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <EmailShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <WhatsappShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </>
  );
};
export default SocialShare;

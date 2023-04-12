import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

const SocialShare = ({ component }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <FacebookShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <FacebookIcon size={32} borderRadius="14px" />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <LinkedinIcon size={32} borderRadius="14px" />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <TwitterIcon size={32} borderRadius="14px" />
        </TwitterShareButton>
        <EmailShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <EmailIcon size={32} borderRadius="14px" />
        </EmailShareButton>
        <WhatsappShareButton
          url={`https://tailwindblock.vercel.app/components/${component.type}/${component.slug}`}
        >
          <WhatsappIcon size={32} borderRadius="14px" />
        </WhatsappShareButton>
      </div>
    </>
  );
};
export default SocialShare;

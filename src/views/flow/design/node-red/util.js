/* 求字符串的字节长度 */
export function getBytesLength(word) {
  if (!word)
    return 0

  let totalLength = 0
  for (let i = 0; i < word.length; i++) {
    const c = word.charCodeAt(i)
    if ((word.match(/[A-Z]/)))
      totalLength += 1.5
    else if ((c >= 0x0001 && c <= 0x007E) || (c >= 0xFF60 && c <= 0xFF9F))
      totalLength += 1
    else
      totalLength += 1.8
  }
  return totalLength
}

export function makeEmailScript(title, mail, txt) {
  const msg = `
            import com.yomahub.liteflow.script.ScriptExecuteWrap;
            import com.yomahub.liteflow.script.body.JaninoCommonScriptBody;
            import com.yomahub.liteflow.slot.DefaultContext;
            import org.springframework.mail.SimpleMailMessage;
            import org.springframework.mail.javamail.JavaMailSenderImpl;
            import java.nio.charset.StandardCharsets;
            public class ScriptBody implements JaninoCommonScriptBody {
                @Override
                public Void body(ScriptExecuteWrap wrap) {
                    DefaultContext ctx = (DefaultContext) wrap.cmp.getContextBean(DefaultContext.class);
                    JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
                    javaMailSender.setHost("smtp.163.com");
                    javaMailSender.setUsername("ymitcloud");
                    javaMailSender.setPassword("WOOGBTLFEIVGNZMN");
                    javaMailSender.setPort(25);
                    javaMailSender.setProtocol("smtp");
                    javaMailSender.setDefaultEncoding(StandardCharsets.UTF_8.displayName());
                    SimpleMailMessage smm = new SimpleMailMessage();
                    // 设置收件人，寄件人
                    smm.setTo("${mail}");
                    smm.setFrom("ymitcloud@163.com");
                    smm.setSubject("${title}");
                    smm.setText("${txt}" );
                    // 发送邮件
                    javaMailSender.send(smm);
                    // 必须返回null
                    return null;
                }
            }`
  return msg
}

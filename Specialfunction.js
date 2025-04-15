import javax.swing.*;
import java.awt.event.*;

public class ScreenshotPrevention {

    public static void main(String[] args) {
        JFrame frame = new JFrame("Screenshot Prevention");

        frame.addMouseListener(new MouseAdapter() {
            public void mousePressed(MouseEvent e) {
                if (e.getButton() == MouseEvent.BUTTON3) {
                    JOptionPane.showMessageDialog(frame, "Warning ⚠️ Right click is disabled.");
                    e.consume();
                }
            }
        });

        frame.addKeyListener(new KeyAdapter() {
            public void keyPressed(KeyEvent e) {
                if (e.getKeyCode() == KeyEvent.VK_PRINTSCREEN) {
                    JOptionPane.showMessageDialog(frame, "Warning ⚠️ PrintScreen key is disabled.");
                }
            }
        });

        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
              }

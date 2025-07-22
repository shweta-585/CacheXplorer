import java.util.ArrayList;
import java.util.HashMap;

class RandomImpl {
    int csize, len;
    HashMap<Integer, Integer> cdata;

    public RandomImpl(int size) {
        this.csize = size;
        this.len = 0;
        cdata = new HashMap<>();
    }

    boolean pagefault() {
        return len==csize ? true : false;
    }

    void evict() {
        double f = Math.random()/Math.nextDown(1.0);
        int x = (int)((csize-1)*f);
        cdata.remove(x);
    }


    public void put(int key, int d) {
        if( pagefault() == true ) {
            evict();
        }
        cdata.put(key,d);
        len++;
    }

    public int get(int key) {
        if( cdata.containsKey(key) == false )   return Integer.MIN_VALUE;
        return cdata.get(key);
    }

}

public class Random_Cache {
    public static void main(String[] args) {
        RandomImpl obj = new RandomImpl(2);

        obj.put(1, 1);
        obj.put(2, 2);
        System.out.println(obj.get(1));
        obj.put(3, 3);
        System.out.println(obj.get(2));
        obj.put(4, 4);
        System.out.println(obj.get(1));
        System.out.println(obj.get(3));
        System.out.println(obj.get(4));

    }
}
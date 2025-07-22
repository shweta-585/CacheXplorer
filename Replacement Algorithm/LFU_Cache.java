public class LFU_Cache {
    public static void main(String[] args) {
        LRUImplementation obj = new LRUImplementation(2);

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